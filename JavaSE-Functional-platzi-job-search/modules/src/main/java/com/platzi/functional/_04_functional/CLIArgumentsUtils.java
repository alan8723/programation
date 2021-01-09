package com.platzi.functional._04_functional;
import java.util.function.Consumer;
import java.util.function.Supplier;

public class CLIArgumentsUtils {
    static void showHelp(CLIArguents cliArguments){
        Consumer<CLIArguents> consumerHelper = cliArguents -> {
            if(cliArguents.isHealp()){
                System.out.println("Manual solicitado");
            }
        };

        consumerHelper.accept(cliArguments);
    }

    static CLIArguents generateCLI(){
        Supplier<CLIArguents> generator = () -> new CLIArguents();

        return generator.get();
    }
}
