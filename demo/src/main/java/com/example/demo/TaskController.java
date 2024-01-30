package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;


    @GetMapping
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @GetMapping("/imported")
    public List<Task> getImportedTasks() {
        return taskRepository.findByImported(true);
    }

    @GetMapping("/completed")
    public List<Task> getCompletedTasks() {
        return taskRepository.findByCompleted(true);
    }

    @GetMapping("/incomplete")
    public List<Task> getIncompleteTasks() {
        return taskRepository.findByIncomplete(true);
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable String id, @RequestBody Task updatedTask) {
        Task existingTask = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found with id: " + id));

        // Update the existing task with the information from the updatedTask
        existingTask.setName(updatedTask.getName());
        existingTask.setImported(updatedTask.isImported());
        existingTask.setCompleted(updatedTask.isCompleted());
        existingTask.setIncomplete(updatedTask.isIncomplete());

        // Save the updated task
        return taskRepository.save(existingTask);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable String id) {
        taskRepository.deleteById(id);
    }

}
