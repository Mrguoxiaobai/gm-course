package com.course.system.controller;

import com.course.server.domain.Test;
import com.course.server.service.TestService;
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
