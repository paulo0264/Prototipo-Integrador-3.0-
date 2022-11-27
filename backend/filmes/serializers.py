from rest_framework import serializers
from .models import Filme
from django.contrib.auth.models import User


class FilmeSerializer(serializers.ModelSerializer):  # create class to serializer model
    creator = serializers.ReadOnlyField(source='creator.username')

    class Meta:
        model = Filme
        fields = ('id', 'title', 'genre', 'year', 'creator')


class UserSerializer(serializers.ModelSerializer):  # create class to serializer user model
    filmes = serializers.PrimaryKeyRelatedField(many=True, queryset=Filme.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'filmes')