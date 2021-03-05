package com.course.server.serviceImp;

import com.course.server.domain.Test;
import com.course.server.domain.TestExample;
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
        TestExample testExample=new TestExample();
        testExample.createCriteria().andIdEqualTo("1").andNameEqualTo("guo");
        testExample.or().andNameEqualTo("wei");
        testExample.setOrderByClause("id desc");
        return testMapper.selectByExample(testExample);
    }
}
