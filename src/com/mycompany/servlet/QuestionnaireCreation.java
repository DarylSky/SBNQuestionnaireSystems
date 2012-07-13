package com.mycompany.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class QuestionnaireCreation
 */
public class QuestionnaireCreation extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public QuestionnaireCreation() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    @Override
    protected void doGet(final HttpServletRequest request, final HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        PrintWriter out = response.getWriter();
        String text = request.getParameter("JSONText");
        out.println(text);
        response.sendRedirect("Preview.jsp?JSONText=" + text);

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    @Override
    protected void doPost(final HttpServletRequest request, final HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub

        /* System.out.println("test :" + request.getParameter("test")); */

        /*
         * final String[] strArray = text.split("\\QuestionID"); for (final
         * String str : strArray) { System.out.println(str); }
         */

    }
}
