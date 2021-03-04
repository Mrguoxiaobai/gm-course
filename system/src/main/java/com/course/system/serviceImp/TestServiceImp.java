package com.course.system.serviceImp;

import com.course.system.domain.Test;
import com.course.system.mapper.TestMapper;
import com.course.system.service.TestService;
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
