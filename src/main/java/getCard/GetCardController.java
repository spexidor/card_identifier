package cardmatcher.rest;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GetCardController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/getCard")
    public GetCardRestService getCard(@RequestParam(value="imageData", defaultValue="123") String name) {
        //return new GetCardRestService(counter.incrementAndGet());
    	return new GetCardRestService(name);
    }
}
