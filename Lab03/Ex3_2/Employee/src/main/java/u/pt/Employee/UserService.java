package u.pt.Employee;
import java.util.List;

public interface UserService {
    User createUser(User user);

    User getUserById(Long userId);

    User findByEmail(String email);

    List<User> getAllUsers();

    User updateUser(User user);

    void deleteUser(Long userId);
}