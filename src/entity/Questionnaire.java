package entity;
import java.util.*;

public class Questionnaire {

	int questionnaireID;
	String category;
	Date dateCreated;
	Date dateLastModified;
	int userProfileID;
	
	public Questionnaire(int questionnaireID, String category, Date dateCreated, Date dateLastModified, int userProfileID ){
		
		this.questionnaireID = questionnaireID;
		this.category= category;
		this.dateCreated = dateCreated;
		this.dateLastModified = dateLastModified;
		this.userProfileID = userProfileID;
	}
	
	public int getQuestionnaireID(){
		return questionnaireID;
	}
	
	public String getCategory(){
		return category;
	}
	
	public Date getDateCreated(){
		return dateCreated;
	}
	
	public Date getDateLastModified(){
		return dateLastModified;
	}
	
	public int getUserProfileID(){
		return userProfileID;
	}
	
}
