package com.example.gary.gunslinger;

import android.content.Context;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;

import java.io.File;
import java.io.PrintWriter;

public class MainActivity extends AppCompatActivity {

    private WebView mWebView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mWebView = (WebView) findViewById(R.id.activity_main_webview);
        //myWebView.loadUrl(this.getFilesDir()+"index.html");

        //myWebView.loadUrl("../../../../../webView/p5/Gunslinger/index.html");
        WebSettings webSettings = mWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
//        File file = new File(this.getFilesDir(), "TESTFILE.txt");
//        System.out.println("|||||||||||||||" + this.getFilesDir() + "|||||||||||||||");
        //mWebView.loadUrl("http://beta.html5test.com/");
        mWebView.loadUrl("file:///android_asset/www/p5/Gunslinger/index.html");
    }
}
