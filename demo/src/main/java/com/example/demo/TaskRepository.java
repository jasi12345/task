package com.example.demo;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TaskRepository extends MongoRepository<Task, String> {
    List<Task> findByImported(boolean imported);
    List<Task> findByCompleted(boolean completed);
    List<Task> findByIncomplete(boolean incomplete);
}
