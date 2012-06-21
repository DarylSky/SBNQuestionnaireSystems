package com.mycompany.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class MainPageServlet
 */
public class MainPageServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public MainPageServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    @Override
    protected void doGet(final HttpServletRequest request, final HttpServletResponse response) throws ServletException, IOException {

        final PrintWriter out = response.getWriter();
        try {
            int numRadio = 1;
            String[] radio = request.getParameterValues("radiotextnumber" + numRadio);
            if (radio != null) {
                for (final String value : radio) {
                    out.println(value);
                }
            }

            while (radio != null) {
                numRadio++;
                radio = request.getParameterValues("radiotextnumber" + numRadio);
                if (radio != null) {
                    for (final String value : radio) {
                        out.println(value);
                    }
                }
            }

            int numShortTextBox = 1;
            String shortTextBox = request.getParameter("shorttextbox" + numShortTextBox);
            if (shortTextBox != null) {
                out.println(shortTextBox);
            }
            while (shortTextBox != null) {
                numShortTextBox++;
                shortTextBox = request.getParameter("shorttextbox" + numShortTextBox);

                // do something with nextBox
                if (shortTextBox != null) {
                    out.println(shortTextBox);
                }
            }

            int numLongTextBox = 1;
            String longTextBox = request.getParameter("longtext" + numLongTextBox);

            while (longTextBox != null) {
                numLongTextBox++;
                longTextBox = request.getParameter("longtext" + numLongTextBox);

                // do something with nextBox
                if (longTextBox != null) {
                    out.println(longTextBox);
                }
            }

            int numTextBox = 1;
            String textBox = request.getParameter("hiddentextbox" + numTextBox);
            if (textBox == null) {
                numTextBox = 0;

            }
            while (textBox != null) {
                numTextBox++;
                textBox = request.getParameter("hiddentextbox" + numTextBox);

            }
            if (numTextBox != 0) {
                out.println(numTextBox - 1);
            }

            int paragraph = 1;
            String paragraphText = request.getParameter("hiddenparagraphnumber" + paragraph);

            if (paragraphText == null) {
                paragraph = 0;
                out.println("No Paragraph");

            }
            while (paragraphText != null) {
                paragraph++;
                paragraphText = request.getParameter("hiddenparagraphnumber" + paragraph);
            }
            if (paragraph != 0) {
                out.println(paragraph - 1);
            }

            int numCheckBox = 1;
            String[] checkbox = request.getParameterValues("checktext" + numCheckBox);
            if (checkbox != null) {
                for (final String value : checkbox) {
                    out.println(value);
                }
            }

            while (checkbox != null) {
                numCheckBox++;
                checkbox = request.getParameterValues("checktext" + numCheckBox);
                if (checkbox != null) {
                    for (final String value : checkbox) {
                        out.println(value);
                    }
                }

            }

        } finally {
            out.close();
        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    @Override
    protected void doPost(final HttpServletRequest request, final HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
    }

}
