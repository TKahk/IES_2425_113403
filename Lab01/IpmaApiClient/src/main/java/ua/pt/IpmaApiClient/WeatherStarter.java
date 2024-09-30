package ua.pt.IpmaApiClient;

import retrofit2.Call;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import ua.pt.IpmaApiClient.IpmaCityForecast;//may need to adapt package name
import ua.pt.IpmaApiClient.IpmaService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * demonstrates the use of the IPMA API for weather forecast
 */
public class WeatherStarter {

    private static final Logger logger = LogManager.getLogger(WeatherStarter.class);

    // todo: should generalize for a city passed as argument
    // private static final int CITY_ID_AVEIRO = 1010500;

    public static void main(String[] args) {

        // get a retrofit instance, loaded with the GSon lib to convert JSON into
        // objects
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://api.ipma.pt/open-data/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        // create a typed interface to use the remote API (a client)
        IpmaService service = retrofit.create(IpmaService.class);
        // prepare the call to remote endpoint
        // Call<IpmaCityForecast> callSync = service.getForecastForACity(cityCode);

        Call<IpmaDistrictsIslands> callSyncDistricts = service.getDistrictsIslands();

        List<Integer> districtIds = new ArrayList<>();
        HashMap<Integer, String> districts = new HashMap<>();

        int randomDistrict = -1;

        try {
            Response<IpmaDistrictsIslands> apiResponse = callSyncDistricts.execute();
            IpmaDistrictsIslands forecast = apiResponse.body();
            if (forecast != null) {

                for (IpmaDistrictsIslands d : forecast.getData()) {
                    // System.out.println(d.getGlobalIdLocal() + " " + d.getLocal());
                    districtIds.add(d.getGlobalIdLocal());
                    districts.put(d.getGlobalIdLocal(), d.getLocal());
                }

                randomDistrict = districtIds.get((int) (Math.random() * districtIds.size()));

            } else {
                // System.out.println("No results for this request!");
                logger.error("No results for this request!");
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        if (randomDistrict == -1) {
            // System.out.println("No district found!");
            logger.error("No district found!");
            System.exit(0);
        }

        Call<IpmaCityForecast> callSyncDistrict = service.getForecastForACity(randomDistrict);

        try {
            Response<IpmaCityForecast> apiResponse = callSyncDistrict.execute();
            IpmaCityForecast forecast = apiResponse.body();

            if (forecast != null) {
                List<CityForecast> data = forecast.getData();
                CityForecast cityForecast = data.get(0);
                // LOG city name and forecast
                
                // System.out.println("City: " + districts.get(randomDistrict) + "\n Max temp for today: " + cityForecast.getTMax() + "\n Min temp for today: " + cityForecast.getTMin());
                logger.info("City: " + districts.get(randomDistrict) + "\n Max temp for today: " + cityForecast.getTMax() + "\n Min temp for today: " + cityForecast.getTMin());
            } else {
                // System.out.println("No results for this request!");
                logger.error("No results for this request!");
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}