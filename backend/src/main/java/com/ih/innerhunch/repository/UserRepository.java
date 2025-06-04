package com.ih.innerhunch.repository;

import com.ih.innerhunch.model.TestUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<TestUser, Integer> {}
