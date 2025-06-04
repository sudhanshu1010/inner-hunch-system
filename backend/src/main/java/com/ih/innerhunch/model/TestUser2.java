package com.ih.innerhunch.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "testUser2") // exact name of your Supabase table
public class TestUser2 {
    @Id
    private int id;
}
