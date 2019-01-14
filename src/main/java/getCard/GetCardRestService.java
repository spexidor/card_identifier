package cardmatcher.rest;
import java.util.Random;

public class GetCardRestService {

    private final String cardId;
    private final double matchRating;

    /* Input: base64 encoded image data.
     * Output: matched cardId and  rating of match
     */
    public GetCardRestService(String imageData) {
        this.cardId = "input data: " +imageData;
        
        Random rand = new Random();
        int n = rand.nextInt(100) + 1; //100 is the maximum and the 1 is our minimum.
        
        this.matchRating = n;
    }
    
    

    /*
    public String getId() {
        return cardId;
    }

    public double getRating() {
        return matchRating;
    }
    */
}
