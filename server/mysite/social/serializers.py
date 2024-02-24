from rest_framework import serializers
from .models import CustomUser, SocialMediaPost

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'password']

class SocialMediaPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMediaPost
        fields = ['id', 'user', 'desc', 'likes', 'dislikes']