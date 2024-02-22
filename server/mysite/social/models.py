from django.db import models
from django.contrib.auth import get_user_model

# from django.contrib.auth.models import AbstractUser

# class User(AbstractUser):

class SocialMediaPost(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    likes = models.IntegerField(default=0)
    shares = models.IntegerField(default=0)
    comments = models.IntegerField(default=0)
    scheduled_time = models.DateTimeField()

    def __str__(self):
        return self.title

class Analytics(models.Model):
    post = models.ForeignKey(SocialMediaPost, on_delete=models.CASCADE)
    date = models.DateField()
    likes = models.IntegerField(default=0)
    shares = models.IntegerField(default=0)
    comments = models.IntegerField(default=0)

    def __str__(self):
        return f"Analytics for {self.post.title} on {self.date}"
