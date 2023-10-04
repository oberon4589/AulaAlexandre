package com.aula.demo.service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class SecurityConfiguration {
    
    @Bean
    public InMemoryUserDetailsManager userDetailsService() {
        UserDetails user = User.withDefaultPasswordEncoder()
            .username("Oberon")
            .password("123456")
            .roles("ADMIN")
            .build();
        UserDetails user2 = User.withDefaultPasswordEncoder()
            .username("Usuario")
            .password("123456")
            .roles("USER")
            .build();
        return new InMemoryUserDetailsManager(user, user2);
    }

    public void configure (WebSecurity web) throws Exception {
        web.ignoring().requestMatchers("/resources/**");
    }

}
