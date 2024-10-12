package ua.pt.ies.lab02.Spring_Empyrean;

public class Quote {
    private final long id;
    private final String quote;

    public Quote(long id, String content) {
        this.id = id;
        this.quote = content;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return quote;
    }

}
