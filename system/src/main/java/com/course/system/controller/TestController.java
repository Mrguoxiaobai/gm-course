package com.course.system.controller;

import com.course.system.domain.Test;
import com.course.system.service.TestService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class TestController {

    @Resource
    TestService testServiceImp;
    @RequestMapping("/hello")
    public String hello(){
        return "hello word!!";
    }

    @RequestMapping("/test")
    public List<Test> test(){
        return testServiceImp.allTest();
    }

}
