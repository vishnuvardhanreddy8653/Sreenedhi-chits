package com.smartchitti.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "page_contents")
public class PageContent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String pageName;

    @Column(columnDefinition = "LONGTEXT")
    private String contentData;

    public PageContent() {
    }

    public PageContent(String pageName, String contentData) {
        this.pageName = pageName;
        this.contentData = contentData;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPageName() {
        return pageName;
    }

    public void setPageName(String pageName) {
        this.pageName = pageName;
    }

    public String getContentData() {
        return contentData;
    }

    public void setContentData(String contentData) {
        this.contentData = contentData;
    }
}
