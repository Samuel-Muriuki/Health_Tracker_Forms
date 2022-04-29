from rest_framework import serializers
from .models import Data, Lab

class DataSerializer(serializers.ModelSerializer):
    # PrimaryKeyRelatedField
    labform = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    
    class Meta:
        model = Data
        fields = '__all__'
        
class LabSerializer(serializers.ModelSerializer):
    # PrimaryKeyRelatedField
    sample_number = serializers.PrimaryKeyRelatedField(queryset=Data.objects.all(),many=False)
    
    class Meta:
        model = Lab
        fields = '__all__'
