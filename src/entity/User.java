package entity;

public class User {

	int userProfileID;
	String email;
	String firstName;
	String lastName;
	String password;
	String salt;
	String userName;
	int organizationID;
	int version;
	
	public User(int userProfileID, String email, String firstName, String lastName, String password, String salt, String userName, int version, int organizationID){
		this.userProfileID = userProfileID;
		this.email = email;
		this.firstName= firstName;
		this.lastName = lastName;
		this.password = password;
		this.salt = salt;
		this.userName = userName;
		this.organizationID = organizationID;
		this.version= version;
		
	}
	
	public int getUserProfileID(){
		return userProfileID;
	}
	
	public String getEmail(){
		return email;
	}
	
	public String getFirstName(){
		return firstName;
	}
	
	public String getLastName(){
		return lastName;
	}
	
	public String getPassword(){
		return password;
	}
	
	public String getSalt(){
		return salt;
	}
	
	public String getUserName(){
		return userName;
	}
	
	public int getVersion(){
		return version;
	}
	
	public int getOrganizationID(){
		return organizationID;
	}
	
	
}
