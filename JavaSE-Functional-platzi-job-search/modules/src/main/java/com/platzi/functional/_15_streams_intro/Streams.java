package com.platzi.functional._15_streams_intro;

import com.platzi.functional._06_reference_operator.NombresUtils;
import org.graalvm.compiler.core.target.Backend;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

public class Streams {
    public static void main(String[] args) {
        List<String> courseList = NombresUtils.getList(
                "Java",
                "Frontend",
                "Backend",
                "FullStack");

        Stream<String> courseStream = Stream.of("Java",
                "Frontend",
                "Backend",
                "FullStack");

        //Stream<Integer> courseLengthStream = courseStream.map(curse -> curse.length());

        //Optional<Integer> longest = courseLengthStream.max((x, y) -> y-x);

        Stream<String> emphasisCourseStream = courseStream.map(course -> course + "!");
        Stream<String> justJavaCourses = emphasisCourseStream.filter(course -> course.contains("Java"));
        justJavaCourses.forEach(System.out::println);

        Stream<String> courseStream2 = courseList.stream();

        addOperator(courseStream2.map(course -> course + "!!")
                .filter(course -> course.contains("Java"))
        ).forEach(System.out::println);

    }

    static <T> Stream<T> addOperator(Stream<T> stream){
        return stream.peek(data -> System.out.println("Dato: " + data));
    }

}
