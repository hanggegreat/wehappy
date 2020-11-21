package cn.chasers.wehappy.user.config;

import cn.chasers.wehappy.user.interceptor.UserDtoInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

/**
 * @author zhangyuanhang
 * @date 2020/11/21: 3:41 下午
 */
@Configuration
public class InterceptorConfig extends WebMvcConfigurationSupport {
    @Override
    protected void addInterceptors(InterceptorRegistry registry) {
        registry
                .addInterceptor(new UserDtoInterceptor())
                .addPathPatterns("/**");
        super.addInterceptors(registry);
    }
}
