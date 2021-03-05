package com.course.server.serviceImp;

import com.course.server.domain.Test;
import com.course.server.mapper.TestMapper;
import com.course.server.service.TestService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class TestServiceImp implements TestService {
    @Resource
    TestMapper testMapper;

    @Override
    public List<Test> allTest() {
        return testMapper.list();
    }
}
