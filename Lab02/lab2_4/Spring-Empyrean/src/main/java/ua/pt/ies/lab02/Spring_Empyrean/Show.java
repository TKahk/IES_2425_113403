package ua.pt.ies.lab02.Spring_Empyrean;

import java.util.List;

public class Show {
    private final long id;
    private final String content;

    public Show(long id, String content) {
        this.id = id;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

}
