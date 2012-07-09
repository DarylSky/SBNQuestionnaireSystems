package dataManager;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import entity.User;

public class UserDataManager {

    static String dbURL = "jdbc:mysql://localhost:3306/questionnairesystem";
    static String userName = "root";
    static String password = "mysql";
    static java.sql.Connection dbConn = null;
    static PreparedStatement queryPstmt = null;
    static PreparedStatement updatePstmt = null;
    static ResultSet rs = null;

    public static User getUserByUserProfileID(final int UID) {
        User u = null;
        String email = null;
        String firstName = null;
        String lastName = null;
        String pass = null;
        String salt = null;
        String user = null;
        int organizationID = 0;
        int version = 0;

        try {
            final String selectSql = "Select * from user where userprofileid=" + UID;
            Class.forName("com.mysql.jdbc.Driver").newInstance();
            dbConn = DriverManager.getConnection(dbURL, userName, password);
            queryPstmt = dbConn.prepareStatement(selectSql);
            rs = queryPstmt.executeQuery();
            while (rs.next()) {
                email = rs.getString("email");
                firstName = rs.getString("firstName");
                lastName = rs.getString("lastName");
                pass = rs.getString("password");
                salt = rs.getString("salt");
                user = rs.getString("username");
                organizationID = Integer.parseInt(rs.getString("organizationID"));
                version = Integer.parseInt(rs.getString("version"));

            }
            u = new User(UID, email, firstName, lastName, pass, salt, user, version, organizationID);
            return u;
        } catch (final Exception e) {
            e.printStackTrace();
        }
        return u;
    }
}
