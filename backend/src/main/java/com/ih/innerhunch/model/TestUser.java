package com.ih.innerhunch.model;

import jakarta.persistence.Table;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;

@Entity
@Table(name = "testUser") // exact name of your Supabase table
public class TestUser {
    @Id
    private int id;

    private String first_name;
    private String last_name;

    // Getters, setters, constructors
    public String getFirstName(){
        return first_name;
    }

    public void setFirstName(String first_name){
        this.first_name = first_name;
    }

    public String getLastName(){
        return last_name;
    }

    public void setLastName(String last_name){
        this.last_name = last_name;
    }
}
