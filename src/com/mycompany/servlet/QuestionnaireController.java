package com.mycompany.servlet;

import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import dataManager.QuestionnaireDataManager;
import entity.Questionnaire;

/**
 * Servlet implementation class QuestionnaireController
 */
public class QuestionnaireController extends HttpServlet {

    private static final long serialVersionUID = 1L;

    public static ArrayList<Questionnaire> getQuestionnaire() {
        ArrayList<Questionnaire> questionnaires = QuestionnaireDataManager.getQuestionnaireByUserProfileID(1);
        return questionnaires;
    }

    /**
     * @see HttpServlet#HttpServlet()
     */
    public QuestionnaireController() {
        super();

    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
    }
}
