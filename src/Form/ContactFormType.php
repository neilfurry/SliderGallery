<?php

namespace App\Form;

//use App\Entity\ContactForm;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'attr'=>[
                    'placeholder' => 'Your Name',
                    'class' => 'form-control'
                ]
            ])
            ->add('email', EmailType::class, [
                'attr'=>[
                    'placeholder' => 'Your Email',
                    'class' => 'form-control'
                ]
            ])
            ->add('phone', TextType::class, [
                'attr'=>[
                    'placeholder' => 'Your Phone Number',
                    'class' => 'form-control'
                ]
            ])
            ->add('message', TextareaType::class, [
                'attr'=>[
                    'placeholder' => 'Your Message',
                    'class' => 'form-control'
                ]
            ])
            ->add('Send_Message', SubmitType::class, [
                'attr' =>[
                    'class' => 'btn btn-primary mt-3'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
           // 'data_class' => ContactForm::class,
        ]);
    }
}
