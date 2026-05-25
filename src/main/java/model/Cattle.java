package model;

public class Cattle {
    private int id;
    private int user_id;
    private String cattleName;

    public Cattle() {

    }

    public Cattle(int id, int user_id, String cattleName) {
        this.id = id;
        this.user_id = user_id;
        this.cattleName = cattleName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return user_id;
    }

    public void setUserId(int user_id) {
        this.user_id = user_id;
    }

    public String getCattleName() {
        return cattleName;
    }

    public void setCattleName(String cattleName) {
        this.cattleName = cattleName;
    }
}