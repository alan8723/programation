package com.platzi.functional._10_chaining;

public class Chainingg {

    public static void main(String[] args) {
        StringBuilder stringBuildere = new StringBuilder();
        stringBuildere.append("hola")
                .append("Alumno")
                .append("de")
                .append("platzi");

        Chainer chainer = new Chainer();
        chainer.sayHi().sayBay();
    }

    static class Chainer{
        public Chainer sayHi(){
            System.out.println("hola");
            return this;
        }
        public Chainer sayBay(){
            System.out.println("bye");
            return this;
        }
    }

}
