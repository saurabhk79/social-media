from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import CustomUser, SocialMediaPost
from .serializers import CustomUserSerializer, SocialMediaPostSerializer
from rest_framework.permissions import IsAuthenticated

@api_view(['POST'])
def signup(request):
    serializer = CustomUserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response(CustomUserSerializer(user).data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    # Your login logic here
    pass

@api_view(['GET'])
def get_posts(request):
    user = request.user
    friends = user.friends.all()
    posts = SocialMediaPost.objects.filter(user__in=friends)
    serializer = SocialMediaPostSerializer(posts, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_friends_list(request):
    user = request.user
    friends = user.friends.all()
    serializer = CustomUserSerializer(friends, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def user_search(request):
    query = request.query_params.get('query')
    users = CustomUser.objects.filter(username__icontains=query)
    serializer = CustomUserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_post(request):
    serializer = SocialMediaPostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)