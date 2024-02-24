from django.db import models
from django.contrib.auth import get_user_model

from django.contrib.auth.models import AbstractUser, Group, Permission
from django.utils.translation import gettext_lazy as _

class CustomUser(AbstractUser):
    username = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    friends = models.ManyToManyField('self', related_name='user_friends', blank=True)

    groups = models.ManyToManyField(
        Group,
        verbose_name=_('groups'),
        blank=True,
        related_name='custom_users_groups'
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=_('user permissions'),
        blank=True,
        related_name='custom_users_permissions'
    )

    def add_friend(self, friend):
        self.friends.add(friend)
        friend.friends.add(self)

    def __str__(self):
        return self.username

class SocialMediaPost(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE,related_name='posts')
    desc = models.CharField(max_length=255)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)

    def __str__(self):
        return self.desc
