<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Persistence\ObjectManager;

class UserFixtures extends BaseFixture
{
    protected function loadData(ObjectManager $manager)
    {
        // $product = new Product();
        // $manager->persist($product);
        $this->createMany(10,"main_users", function($i){
            $user = new User();
            $user->setEmail(sprintf('diver%d@mustdodiving.com', $i));
            $user->setUsername($this->faker->username);
            return $user;
        });
        $manager->flush();
    }
}
