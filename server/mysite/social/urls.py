from django.urls import path
from .views import signup, login, get_posts, get_friends_list, user_search, create_post

urlpatterns = [
    path('signup/', signup, name='signup'),
    path('login/', login, name='login'),
    path('posts/', get_posts, name='posts'),
    path('friends/', get_friends_list, name='friends'),
    path('search/', user_search, name='search'),
    path('create_post/', create_post, name='create_post'),
]