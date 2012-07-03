package com.mycompany.servlet;


import entity.*;
import java.sql.*;
import java.util.*;


public class DataManager {
    static String dbURL = "jdbc:mysql://localhost:3306/questionnairesystem";
    static String userName = "root";
    static String password = "mysql";
    static java.sql.Connection dbConn = null;
    static PreparedStatement queryPstmt = null;
    static PreparedStatement updatePstmt = null;
    static ResultSet rs = null;
    
    public static int print(){
        return 1;
    }

  


}
