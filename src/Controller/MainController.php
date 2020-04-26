<?php

namespace App\Controller;

use App\Form\ContactFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="main")
     */
    public function index()
    {
        return $this->render('main/index.html.twig');
    }

    /**
     * @Route("/must-do-diving-current-projects", name="current_projects")
     */
    public function currentProjects()
    {
        return $this->render('main/current-projects.html.twig',
            ['page_name' =>'Current Projects' ]
        );
    }

    /**
     * @Route("/must-do-diving-upcoming-travels", name="upcoming_travels")
     */
    public function upcomingTravels()
    {
        return $this->render('main/upcoming-travels.html.twig',
            ['page_name' =>'Upcoming Travels' ]);
    }

    /**
     * @Route("/must-do-diving-equipment", name="diving_equipment")
     */
    public function divingEquipment()
    {
        return $this->render('main/diving-equipment.html.twig',
            ['page_name' =>'Diving Equipment' ]
        );
    }


    /**
     * @Route("/must-do-diving-about-us", name="about_us")
     */
    public function aboutUs()
    {
        return $this->render('main/about-us.html.twig',
            ['page_name' =>'About Us' ]
        );
    }

    /**
     * @Route("/must-do-diving-contact-us", name="contact_us")
     */
    public function contactUs(Request $request, \Swift_Mailer $mailer)
    {

        $form = $this->createForm(ContactFormType::class);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $formData = $form->getData();

            $message = (new \Swift_Message('You Got Mail From MustDoDiving.com'))
                ->setFrom($formData['email'])
                ->setTo('neilfurry@gmail.com')
                ->setBody(

                    $this->renderView(

                        'email/contact-us-email.html.twig',
                        ['name' => $formData['name'],
                            'email' => $formData['email'],
                            'phone' => $formData['phone'],
                            'message' => $formData['message']
                        ]
                    ),
                    'text/html'

                );
            $mailer->send($message);
            $this->addFlash('info','Email Sent Successfully!');
        }

        //dump($request);

        return $this->render('main/contact-us.html.twig', [
                    'page_name' =>'Contact Us',
                    'contact_form' => $form->createView()
                ]);
    }



}
