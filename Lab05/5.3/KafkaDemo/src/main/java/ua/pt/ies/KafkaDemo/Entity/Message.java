package ua.pt.ies.KafkaDemo.Entity;

public class Message {
    private String nMec;
    private int generatedNumber;
    private String type;

    // Getters and setters
    public String getnMec() {
        return nMec;
    }

    public void setnMec(String nMec) {
        this.nMec = nMec;
    }

    public int getGeneratedNumber() {
        return generatedNumber;
    }

    public void setGeneratedNumber(int generatedNumber) {
        this.generatedNumber = generatedNumber;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Message{" +
                "nMec='" + nMec + '\'' +
                ", generatedNumber=" + generatedNumber +
                ", type='" + type + '\'' +
                '}';
    }
}
