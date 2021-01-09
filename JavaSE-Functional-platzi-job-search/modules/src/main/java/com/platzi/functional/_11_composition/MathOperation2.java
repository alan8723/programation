package com.platzi.functional._11_composition;

import java.util.function.Function;

public class MathOperation2 {
    public static void main(String[] args) {
        Function<Integer, Integer> MultiplyBi3 = (x) ->{
            System.out.println("multiplicando " + x + " por 3");
            return x *3;
        };

        Function<Integer, Integer> add1MultiplyBi3 =
                MultiplyBi3.compose(y -> {
                    System.out.println("Le agregamos 1 a: " +y);
                    return y + 1;
                });

        Function<Integer, Integer> andSquare =
                add1MultiplyBi3.andThen(x-> {
                    System.out.println("Estoy elevando " + x + "al cuadrado");
                    return x * x;
                });

        System.out.println(
                add1MultiplyBi3.apply(5)
        );

        System.out.println(andSquare.apply(3));

    }
}
