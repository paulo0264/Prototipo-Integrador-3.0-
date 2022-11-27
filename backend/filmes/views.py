from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.permissions import IsAuthenticated
from django_filters import rest_framework as filters
from .models import Filme
from .permissions import IsOwnerOrReadOnly
from .serializers import FilmeSerializer
from .pagination import CustomPagination
from .filters import FilmeFilter


class ListCreateFilmeAPIView(ListCreateAPIView):
    serializer_class = FilmeSerializer
    queryset = Filme.objects.all()
    permission_classes = [IsAuthenticated]
    pagination_class = CustomPagination
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = FilmeFilter

    def perform_create(self, serializer):
        # Assign the user who created the movie
        serializer.save(creator=self.request.user)


class RetrieveUpdateDestroyFilmeAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = FilmeSerializer
    queryset = Filme.objects.all()
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
