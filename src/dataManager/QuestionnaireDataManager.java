package dataManager;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import entity.Questionnaire;

public class QuestionnaireDataManager {

    static String dbURL = "jdbc:mysql://localhost:3306/questionnairesystem";
    static String userName = "root";
    static String password = "mysql";
    static java.sql.Connection dbConn = null;
    static PreparedStatement queryPstmt = null;
    static PreparedStatement updatePstmt = null;
    static ResultSet rs = null;

    public static ArrayList<Questionnaire> getQuestionnaireByUserProfileID(final int userProfileID) {
        ArrayList<Questionnaire> questionnaires = new ArrayList<Questionnaire>();
        Questionnaire questionnaire = null;
        int questionnaireID = 0;
        String category = null;
        String datecreated = null;
        String datelastmodified = null;
        final DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        java.util.Date datec = null;
        java.util.Date datem = null;
        int questionorder = 0;
        String title = null;

        try {
            final String selectSql = "select * from questionnaire where userprofileid=" + userProfileID;
            Class.forName("com.mysql.jdbc.Driver").newInstance();
            dbConn = DriverManager.getConnection(dbURL, userName, password);
            queryPstmt = dbConn.prepareStatement(selectSql);
            rs = queryPstmt.executeQuery();
            while (rs.next()) {
                questionnaireID = Integer.parseInt(rs.getString("questionnaireid"));
                category = rs.getString("category");
                datecreated = rs.getString("datecreated");
                datelastmodified = rs.getString("datelastmodified");
                datec = formatter.parse(datecreated);
                datem = (java.util.Date) formatter.parse(datelastmodified);
                questionorder = Integer.parseInt(rs.getString("questionorder"));
                title = rs.getString("title");
                questionorder = Integer.parseInt(rs.getString("questionorder"));

                questionnaire = new Questionnaire(questionnaireID, title, category, datec, datem, questionorder, userProfileID);
                questionnaires.add(questionnaire);
            }

            return questionnaires;
        } catch (final Exception e) {
            e.printStackTrace();
        }
        return questionnaires;
    }

    public static ArrayList<Questionnaire> getQuestionnaireByCategorySustainability(final int userProfileID) {
        ArrayList<Questionnaire> questionnaires = new ArrayList<Questionnaire>();
        Questionnaire questionnaire = null;
        int questionnaireID = 0;
        String category = null;
        String datecreated = null;
        String datelastmodified = null;
        final DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        java.util.Date datec = null;
        java.util.Date datem = null;
        int questionorder = 0;
        String title = null;

        try {
            String selectSql = "select * from questionnaire where category= 'sustainability' and userprofileid=" + userProfileID;
            Class.forName("com.mysql.jdbc.Driver").newInstance();
            dbConn = DriverManager.getConnection(dbURL, userName, password);
            queryPstmt = dbConn.prepareStatement(selectSql);
            rs = queryPstmt.executeQuery();
            while (rs.next()) {
                questionnaireID = Integer.parseInt(rs.getString("questionnaireid"));
                category = rs.getString("category");
                datecreated = rs.getString("datecreated");
                datelastmodified = rs.getString("datelastmodified");
                datec = formatter.parse(datecreated);
                datem = (java.util.Date) formatter.parse(datelastmodified);
                questionorder = Integer.parseInt(rs.getString("questionorder"));
                title = rs.getString("title");
                questionorder = Integer.parseInt(rs.getString("questionorder"));

                questionnaire = new Questionnaire(questionnaireID, title, category, datec, datem, questionorder, userProfileID);
                questionnaires.add(questionnaire);
            }

            return questionnaires;
        } catch (final Exception e) {
            e.printStackTrace();
        }
        return questionnaires;
    }

    public static ArrayList<Questionnaire> getQuestionnaireByCategoryAll(final int userProfileID) {
        ArrayList<Questionnaire> questionnaires = new ArrayList<Questionnaire>();
        Questionnaire questionnaire = null;
        int questionnaireID = 0;
        String category = null;
        String datecreated = null;
        String datelastmodified = null;
        final DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        java.util.Date datec = null;
        java.util.Date datem = null;
        int questionorder = 0;
        String title = null;

        try {
            String selectSql = "select * from questionnaire where userprofileid=" + userProfileID + " GROUP BY category ";
            Class.forName("com.mysql.jdbc.Driver").newInstance();
            dbConn = DriverManager.getConnection(dbURL, userName, password);
            queryPstmt = dbConn.prepareStatement(selectSql);
            rs = queryPstmt.executeQuery();
            while (rs.next()) {
                questionnaireID = Integer.parseInt(rs.getString("questionnaireid"));
                category = rs.getString("category");
                datecreated = rs.getString("datecreated");
                datelastmodified = rs.getString("datelastmodified");
                datec = formatter.parse(datecreated);
                datem = (java.util.Date) formatter.parse(datelastmodified);
                questionorder = Integer.parseInt(rs.getString("questionorder"));
                title = rs.getString("title");
                questionorder = Integer.parseInt(rs.getString("questionorder"));

                questionnaire = new Questionnaire(questionnaireID, title, category, datec, datem, questionorder, userProfileID);
                questionnaires.add(questionnaire);
            }

            return questionnaires;
        } catch (final Exception e) {
            e.printStackTrace();
        }
        return questionnaires;
    }
}
