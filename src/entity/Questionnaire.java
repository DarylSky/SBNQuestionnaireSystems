package entity;

import java.util.Date;

public class Questionnaire {

    int questionnaireID;
    String category;
    Date dateCreated;
    Date dateLastModified;
    int userProfileID;
    String title;
    int questionnaireorder;

    public Questionnaire(int questionnaireID, String title, String category, Date dateCreated, Date dateLastModified, int questionnaireorder,
            int userProfileID) {

        this.questionnaireID = questionnaireID;
        this.category = category;
        this.dateCreated = dateCreated;
        this.dateLastModified = dateLastModified;
        this.userProfileID = userProfileID;
        this.title = title;
        this.questionnaireorder = questionnaireorder;
    }

    public String getCategory() {
        return category;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public Date getDateLastModified() {
        return dateLastModified;
    }

    public int getQuestionnaireID() {
        return questionnaireID;
    }

    public int getQuestionnaireOrder() {
        return questionnaireorder;
    }

    public String getTitle() {
        return title;
    }

    public int getUserProfileID() {
        return userProfileID;
    }
}
