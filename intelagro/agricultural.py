from flask import Blueprint, request, jsonify
from src.models.user import db
from src.models.agricultural import Property, Sensor, SensorReading, Alert
from datetime import datetime, timedelta
import random

agricultural_bp = Blueprint('agricultural', __name__)

# APIs para Dashboard
@agricultural_bp.route('/dashboard/metrics', methods=['GET'])
def get_dashboard_metrics():
    """Retorna métricas principais para o dashboard"""
    try:
        # Simulação de dados de métricas
        metrics = {
            'ph_soil': {
                'value': 6.5,
                'status': 'ideal',
                'trend': 'Ideal para cultivo'
            },
            'npk': {
                'value': '120-55-200',
                'unit': 'mg/kg',
                'status': 'warning',
                'trend': 'Nitrogênio baixo'
            },
            'ndvi': {
                'value': 0.82,
                'status': 'good',
                'trend': 'Vegetação saudável'
            },
            'moisture': {
                'value': 67,
                'unit': '%',
                'status': 'good',
                'trend': 'Nível adequado'
            }
        }
        return jsonify(metrics)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@agricultural_bp.route('/dashboard/charts/moisture', methods=['GET'])
def get_moisture_chart_data():
    """Retorna dados para o gráfico de umidade do solo"""
    try:
        # Simulação de dados históricos
        data = [
            {'name': 'Jan', 'value': 45},
            {'name': 'Fev', 'value': 52},
            {'name': 'Mar', 'value': 48},
            {'name': 'Abr', 'value': 61},
            {'name': 'Mai', 'value': 55},
            {'name': 'Jun', 'value': 67},
        ]
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@agricultural_bp.route('/dashboard/charts/yield', methods=['GET'])
def get_yield_chart_data():
    """Retorna dados para o gráfico de produtividade"""
    try:
        data = [
            {'name': 'Trigo', 'value': 23},
            {'name': 'Milho', 'value': 28},
            {'name': 'Soja', 'value': 35},
            {'name': 'Arroz', 'value': 32},
        ]
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@agricultural_bp.route('/dashboard/alerts', methods=['GET'])
def get_recent_alerts():
    """Retorna alertas recentes"""
    try:
        alerts = Alert.query.filter_by(status='Ativo').order_by(Alert.created_at.desc()).limit(10).all()
        
        # Se não houver alertas no banco, retorna dados simulados
        if not alerts:
            mock_alerts = [
                {
                    'id': 1,
                    'alert_type': 'warning',
                    'title': 'Baixo nível de Nitrogênio',
                    'description': 'Talhão A3 - Recomenda-se aplicação de fertilizante',
                    'created_at': (datetime.now() - timedelta(hours=2)).isoformat()
                },
                {
                    'id': 2,
                    'alert_type': 'success',
                    'title': 'pH ideal alcançado',
                    'description': 'Talhão B1 - Condições ótimas para plantio',
                    'created_at': (datetime.now() - timedelta(hours=4)).isoformat()
                },
                {
                    'id': 3,
                    'alert_type': 'info',
                    'title': 'Análise programada',
                    'description': 'Talhão C2 - Coleta de dados agendada para amanhã',
                    'created_at': (datetime.now() - timedelta(hours=6)).isoformat()
                }
            ]
            return jsonify(mock_alerts)
        
        return jsonify([alert.to_dict() for alert in alerts])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# APIs para Propriedades
@agricultural_bp.route('/properties', methods=['GET'])
def get_properties():
    """Lista todas as propriedades"""
    try:
        properties = Property.query.all()
        
        # Se não houver propriedades no banco, retorna dados simulados
        if not properties:
            mock_properties = [
                {
                    'id': 1,
                    'name': 'Fazenda São João',
                    'location': 'Ribeirão Preto, SP',
                    'area': 250,
                    'crop_type': 'Soja',
                    'owner': 'João Silva',
                    'status': 'Ativo',
                    'last_analysis': '2024-06-15'
                },
                {
                    'id': 2,
                    'name': 'Sítio Boa Vista',
                    'location': 'Campinas, SP',
                    'area': 120,
                    'crop_type': 'Milho',
                    'owner': 'Maria Santos',
                    'status': 'Ativo',
                    'last_analysis': '2024-06-10'
                },
                {
                    'id': 3,
                    'name': 'Fazenda Esperança',
                    'location': 'Piracicaba, SP',
                    'area': 380,
                    'crop_type': 'Cana-de-açúcar',
                    'owner': 'Carlos Oliveira',
                    'status': 'Ativo',
                    'last_analysis': '2024-06-12'
                }
            ]
            return jsonify(mock_properties)
        
        return jsonify([prop.to_dict() for prop in properties])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@agricultural_bp.route('/properties', methods=['POST'])
def create_property():
    """Cria uma nova propriedade"""
    try:
        data = request.get_json()
        
        property = Property(
            name=data['name'],
            location=data['location'],
            area=data['area'],
            crop_type=data['crop_type'],
            owner=data['owner'],
            status=data.get('status', 'Ativo')
        )
        
        db.session.add(property)
        db.session.commit()
        
        return jsonify(property.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@agricultural_bp.route('/properties/<int:property_id>', methods=['PUT'])
def update_property(property_id):
    """Atualiza uma propriedade"""
    try:
        property = Property.query.get_or_404(property_id)
        data = request.get_json()
        
        property.name = data.get('name', property.name)
        property.location = data.get('location', property.location)
        property.area = data.get('area', property.area)
        property.crop_type = data.get('crop_type', property.crop_type)
        property.owner = data.get('owner', property.owner)
        property.status = data.get('status', property.status)
        
        db.session.commit()
        
        return jsonify(property.to_dict())
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@agricultural_bp.route('/properties/<int:property_id>', methods=['DELETE'])
def delete_property(property_id):
    """Remove uma propriedade"""
    try:
        property = Property.query.get_or_404(property_id)
        db.session.delete(property)
        db.session.commit()
        
        return jsonify({'message': 'Propriedade removida com sucesso'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# APIs para Mapa
@agricultural_bp.route('/map/layers', methods=['GET'])
def get_map_layers():
    """Retorna dados das camadas do mapa"""
    try:
        # Simulação de dados de camadas
        layers = {
            'boundaries': {
                'name': 'Limites dos Talhões',
                'active': True,
                'data': []  # Dados geoespaciais seriam carregados aqui
            },
            'ndvi': {
                'name': 'NDVI',
                'active': True,
                'data': []
            },
            'ph': {
                'name': 'pH do Solo',
                'active': False,
                'data': []
            },
            'moisture': {
                'name': 'Umidade',
                'active': True,
                'data': []
            },
            'npk': {
                'name': 'NPK',
                'active': False,
                'data': []
            }
        }
        return jsonify(layers)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@agricultural_bp.route('/sensors', methods=['GET'])
def get_sensors():
    """Lista todos os sensores"""
    try:
        property_id = request.args.get('property_id')
        
        if property_id:
            sensors = Sensor.query.filter_by(property_id=property_id).all()
        else:
            sensors = Sensor.query.all()
        
        return jsonify([sensor.to_dict() for sensor in sensors])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@agricultural_bp.route('/sensors/<int:sensor_id>/readings', methods=['GET'])
def get_sensor_readings(sensor_id):
    """Retorna leituras de um sensor específico"""
    try:
        days = request.args.get('days', 30, type=int)
        start_date = datetime.now() - timedelta(days=days)
        
        readings = SensorReading.query.filter(
            SensorReading.sensor_id == sensor_id,
            SensorReading.timestamp >= start_date
        ).order_by(SensorReading.timestamp.desc()).all()
        
        return jsonify([reading.to_dict() for reading in readings])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

