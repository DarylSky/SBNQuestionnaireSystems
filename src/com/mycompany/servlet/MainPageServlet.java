package com.mycompany.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

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
        final HttpSession session = request.getSession(true);
        try {
            /*
             * TODO output your page here. You may use following sample code.
             */
            /*
             * out.println("<html>"); out.println("<head>");
             * out.println("<title>Servlet Submit</title>");
             * out.println("</head>"); out.println("<body>");
             * out.println("<h1>Servlet Submit at " + request.getContextPath() +
             * "</h1>"); out.println("</body>"); out.println("</html>");
             * out.println("abc");
             */
            // String x=request.getParameter("shorttext");

            final ArrayList shortTextBoxArray = new ArrayList();
            int numShortTextBox = 1;
            String shortTextBox = request.getParameter("shorttextbox" + numShortTextBox);
            if (shortTextBox != null) {
                shortTextBoxArray.add(shortTextBox);
            }
            while (shortTextBox != null) {
                numShortTextBox++;
                shortTextBox = request.getParameter("shorttextbox" + numShortTextBox);

                // do something with nextBox
                if (shortTextBox != null) {
                    shortTextBoxArray.add(shortTextBox);
                }
            }

            /*
             * String shortText=""; for(int i=0;i<shortTextBoxArray.size();i++){
             * String shortValue=(String)shortTextBoxArray.get(i); if(i
             * !=shortTextBoxArray.size()-1){ shortText+=shortValue + ",";
             * }else{ shortText+=shortValue; } }
             */

            final ArrayList longTextBoxArray = new ArrayList();
            int numLongTextBox = 1;
            String longTextBox = request.getParameter("longtext" + numLongTextBox);
            if (longTextBox != null) {
                longTextBoxArray.add(longTextBox);
            }
            while (longTextBox != null) {
                numLongTextBox++;
                longTextBox = request.getParameter("longtext" + numLongTextBox);

                // do something with nextBox
                if (longTextBox != null) {
                    longTextBoxArray.add(longTextBox);
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

                // do something with nextBox
                if (textBox != null) {
                }
            }
            if (numTextBox != 0) {
                numTextBox = numTextBox - 1;
            }

            int paragraph = 1;
            String paragraphText = request.getParameter("hiddenparagraphnumber" + paragraph);

            if (paragraphText == null) {
                paragraph = 0;

            }
            while (paragraphText != null) {
                paragraph++;
                paragraphText = request.getParameter("hiddenparagraphnumber" + paragraph);

                // do something with nextBox
                if (textBox != null) {

                }
            }
            if (paragraph != 0) {
                paragraph = paragraph - 1;
            }

            int numCheckBox = 1;
            String[] checkbox = request.getParameterValues("checktextnumber" + numCheckBox);
            while (checkbox != null) {
                numCheckBox++;
                checkbox = request.getParameterValues("checktextnumber" + numCheckBox);
            }

            final String[] checkBoxArray = new String[numCheckBox];
            int counter = 1;
            checkbox = request.getParameterValues("checktextnumber" + counter);
            String checkBoxValue = "";
            if (checkbox != null) {
                for (int x = 0; x < checkbox.length; x++) {
                    final String value = checkbox[x];
                    if (x != checkbox.length - 1) {
                        checkBoxValue += value + ",";
                    } else {
                        checkBoxValue += value;
                    }
                }

                checkBoxArray[counter - 1] = checkBoxValue;
                checkBoxValue = "";
            }

            while (checkbox != null) {
                counter++;
                checkbox = request.getParameterValues("checktextnumber" + counter);
                if (checkbox != null) {
                    for (int x = 0; x < checkbox.length; x++) {
                        final String value = checkbox[x];
                        if (x != checkbox.length - 1) {
                            checkBoxValue += value + ",";
                        } else {
                            checkBoxValue += value;
                        }
                    }

                    checkBoxArray[counter - 1] = checkBoxValue;
                    checkBoxValue = "";
                }

            }

            int numRadio = 1;
            String[] radio = request.getParameterValues("radiotextnumber" + numRadio);
            while (radio != null) {
                numRadio++;
                radio = request.getParameterValues("radiotextnumber" + numRadio);
            }

            final String[] radioArray = new String[numRadio - 1];
            int radioCounter = 1;
            radio = request.getParameterValues("radiotextnumber" + radioCounter);
            String radioValue = "";
            if (radio != null) {
                for (int x = 0; x < radio.length; x++) {
                    final String value = radio[x];
                    if (x != radio.length - 1) {
                        radioValue += value + ",";
                    } else {
                        radioValue += value;
                    }
                }

                radioArray[radioCounter - 1] = radioValue;
                radioValue = "";
            }

            while (radio != null) {
                radioCounter++;
                radio = request.getParameterValues("radiotextnumber" + radioCounter);
                if (radio != null) {
                    for (int x = 0; x < radio.length; x++) {
                        final String value = radio[x];
                        if (x != radio.length - 1) {
                            radioValue += value + ",";
                        } else {
                            radioValue += value;
                        }
                    }

                    radioArray[radioCounter - 1] = radioValue;
                    radioValue = "";
                }

            }

            session.setAttribute("shortText", shortTextBoxArray);
            session.setAttribute("longText", longTextBoxArray);
            session.setAttribute("numTextBox", numTextBox);
            session.setAttribute("numParagraph", paragraph);
            session.setAttribute("checkBoxValue", checkBoxArray);
            session.setAttribute("radioValue", radioArray);

            final String title = request.getParameter("title");
            final String category = request.getParameter("category");
            out.println(title);
            out.println(category);

            response.sendRedirect("Preview.jsp?title=" + title + "&category=" + category);

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
