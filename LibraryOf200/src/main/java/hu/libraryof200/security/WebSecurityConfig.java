package hu.libraryof200.security;

import lombok.AllArgsConstructor;
import lombok.NonNull;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@EnableWebSecurity
public class WebSecurityConfig {

    @Configuration
    @AllArgsConstructor
    public static class SecurityConfiguration {

        @Bean
        public InMemoryUserDetailsManager userDetailsService() {
            return new InMemoryUserDetailsManager(
                    List.of(
                            User.withUsername("worker")
                                    .password(passwordEncoder().encode("worker"))
                                    .roles("ADMIN")
                                    .build())
            );
        }

        @Bean
        public PasswordEncoder passwordEncoder() {
            return new BCryptPasswordEncoder();
        }

        @Bean
        public AuthenticationProvider authenticationProvider(
                @NonNull final PasswordEncoder passwordEncoder,
                @NonNull final UserDetailsService userDetailsService) {

            final DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
            daoAuthenticationProvider.setUserDetailsService(userDetailsService);
            daoAuthenticationProvider.setPasswordEncoder(passwordEncoder);
            return daoAuthenticationProvider;
        }

        @Bean
        public SecurityFilterChain applicationSecurity(HttpSecurity http) throws Exception {
            return http
                    .csrf(csrf -> csrf
                            .ignoringRequestMatchers(PathRequest.toH2Console())
                            .disable())
                    .cors(config -> config.configure(http))
                    .authorizeHttpRequests(
                            (requests) -> requests
                                    .requestMatchers(PathRequest.toH2Console())
                                    .permitAll()
                                    .requestMatchers(new RequestMatcher[]{new AntPathRequestMatcher("/api/all/**")})
                                    .permitAll()
                                    .requestMatchers(new RequestMatcher[]{new AntPathRequestMatcher("/api/worker/**")})
                                    .hasAuthority("ROLE_ADMIN")
                                    .anyRequest()
                                    .authenticated()
                    )
                    .headers(configurer -> configurer.frameOptions(
                            HeadersConfigurer.FrameOptionsConfig::sameOrigin
                    ))
                    .httpBasic(Customizer.withDefaults())
                    .formLogin(AbstractHttpConfigurer::disable)
                    .build();


        }
    }
}