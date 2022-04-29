from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import Data, DataSerializer, Lab, LabSerializer
from rest_framework import status

# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
def data_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets = Data.objects.all()
        serializer = DataSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def data_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        snippet = Data.objects.get(pk=pk)
    except Data.DoesNotExist:
        return JsonResponse({'error': 'Data does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = DataSerializer(snippet)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = DataSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def data_list_published(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets = Data.objects.filter(published=True)
        serializer = DataSerializer(snippets, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST', 'DELETE'])
def lab_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets = Lab.objects.all()
        serializer = LabSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = LabSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def lab_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        snippet = Lab.objects.get(pk=pk)
    except Lab.DoesNotExist:
        return JsonResponse({'error': 'Data does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = LabSerializer(snippet)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = LabSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def lab_list_published(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets = Lab.objects.filter(published=True)
        serializer = LabSerializer(snippets, many=True)
        return Response(serializer.data)