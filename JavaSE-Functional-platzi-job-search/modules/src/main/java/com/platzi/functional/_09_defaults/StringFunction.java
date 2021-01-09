package com.platzi.functional._09_defaults;

import jdk.nashorn.internal.objects.annotations.Function;

public class StringFunction {
    @FunctionalInterface
    interface StringOperation{
        int getAmount();


        default void operate(String text){
            int x = getAmount();
            while (x-- > 0){
                System.out.println(text);
            }
        }
    }

    @FunctionalInterface
    interface doOperation{
        void take(String text);

        default void execute(int x, String text){
            while (x-- > 0){
                take(text);
            }
        }
    }

    public static void main(String[] args) {
        StringOperation six = () -> 6;
        six.operate("Alumno");

        doOperation operationFive = text -> System.out.println(text);
        operationFive.execute(5,"Platzi");
    }
}
