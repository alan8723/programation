package com.platzi.functional._14_optionals;

import javax.swing.text.html.Option;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

public class Optionalss {

    public static void main(String[] args) {
       List<String> name = getName();
       if(name != null){

       }

       Optional<List<String>> optionalsName = getOpcionalNames();
       if (optionalsName.isPresent()){

       }

       optionalsName.ifPresent(namesValue -> namesValue.forEach(System.out::println));

        Optional<String> valueblePlayer = optionalValuablePlayer();

        String valuablePlayerName = valueblePlayer.orElseGet(() -> "no Player");

    }

    static List<String> getName(){
     List list = new LinkedList<>();

     return Collections.emptyList();
    }

    static String mostValuablePlayer(){
        //return "";
        return null;
    }

    static Optional<List<String>> getOpcionalNames(){
        List<String> nameList = new LinkedList<>();
                //Opteencion de nombres
        return Optional.of(nameList);
    }

    static Optional<String> optionalValuablePlayer(){
        //return Optional.ofNullable();
        try {
        //Accesos
            return Optional.of("Sinuhe");
        }catch (Exception e){
            return Optional.empty();
        }
    }
}
