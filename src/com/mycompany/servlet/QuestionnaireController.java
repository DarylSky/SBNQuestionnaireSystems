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

    public static ArrayList<Questionnaire> getQuestionnaireByCategorySustainability() {
        ArrayList<Questionnaire> questionnaires = QuestionnaireDataManager.getQuestionnaireByCategorySustainability(1);
        return questionnaires;
    }

    public static ArrayList<Questionnaire> getQuestionnaireByCategoryAll() {
        ArrayList<Questionnaire> questionnaires = QuestionnaireDataManager.getQuestionnaireByCategoryAll(1);
        return questionnaires;
    }

    public QuestionnaireController() {
        super();

    }

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
