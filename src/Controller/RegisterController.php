<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class RegisterController extends AbstractController
{
    /**
     * @Route("/register", name="register")
     */
    public function register(Request $request, UserPasswordEncoderInterface $userPasswordEncoder)
    {
       $form = $this->createFormBuilder()
               ->add('username', TextType::class, [
                   'attr'=>[
                       'placeholder' => 'Username',
                       'class' => 'form-control'
                   ]
               ])
               ->add('email', EmailType::class, [
                  'attr' => [
                      'class' => 'form-control',
                      'placeholder' => 'Email'
                   ]
                ])
               ->add('password',RepeatedType::class,[
                   'type'=> PasswordType::class,
                   'invalid_message' => 'The password fields must match.',
                   'options' => ['attr' => ['class' => 'form-control']],
                   'required' => true,
                   'first_options' =>['label'=>'Password'],
                   'second_options' =>['label'=>'Confirm Password'],
                   'attr' =>[
                       'class' => 'form-control'
                   ]
               ])
                ->add('Register', SubmitType::class,[
                    'attr' => [
                        'class' => 'btn btn-primary mt-3'
                    ]
                ])
                ->getForm();

       $form->handleRequest($request);
       if($form->isSubmitted() && $form->isValid()){
           $data = $form->getData();
           $user = new User();
           $user->setUsername($data['username']);
           $user->setEmail($data['email']);
           $user->setPassword(
               $userPasswordEncoder->encodePassword($user,  $data['password'])
           );

           $save = $this->getDoctrine()->getManager();
           $save->persist($user);
           $save->flush();

           return $this->redirect($this->generateUrl('app_login'));

       }

       return $this->render('register/index.html.twig',[
           'page_name' => 'Register User',
           'register_form' => $form->createView()
       ]);
    }
}
